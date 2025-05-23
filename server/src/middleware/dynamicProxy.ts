import { createProxyMiddleware } from "http-proxy-middleware";
import { Request, Response, NextFunction } from "express";

export function dynamicProxy(req: Request, res: Response, next: NextFunction){

  const url: string = req.query.url as string

  const newURL = new URL(url)

  const origin = newURL.origin

  const proxy = createProxyMiddleware({
    target: origin,
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    on: {
      error: (err: any, req: any, res: any) => {

        res.status(500).json({ error: 'Proxy Error', details: err.message })

      }
    }
  })

  return proxy(req, res, next)
}