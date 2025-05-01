import * as fs from 'fs'
import { HttpsProxyAgent } from "https-proxy-agent"

class ProxyManager {

    private proxyList: { protocol: string; proxy: string }[]
    private currentIndex: number
    private agent: HttpsProxyAgent<string>
    private protocol: string;
    private rotationIntervalMs: number

    constructor(proxyFilePath: string, rotationIntervalMs = 10 * 60 * 1000, protocol = 'https') {

        this.rotationIntervalMs = rotationIntervalMs
        this.protocol = protocol
        this.proxyList = fs.readFileSync(proxyFilePath, 'utf-8')
         .split('\n')
         .map(p => p.trim())
         .filter(Boolean)
         .map(p => ({ protocol: this.protocol, proxy: `https://${p}` }))

        this.currentIndex = 0
        this.agent = new HttpsProxyAgent(this.proxyList[this.currentIndex].proxy)

        setInterval(() => this.rotate(), rotationIntervalMs)

    }

    rotate(){

        this.currentIndex = (this.currentIndex + 1) % this.proxyList.length
        this.agent = new HttpsProxyAgent(this.proxyList[this.currentIndex].proxy)

        console.log(`[ProxyManger] Switched to ${this.proxyList[this.currentIndex].proxy}`)

    }

    getAgent(){
        return this.agent
    }
}

module.exports = ProxyManager