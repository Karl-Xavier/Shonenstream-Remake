export function handleGlobalDropdown(ev, clear, closeDropdowns){

  const clickedElement = ev.target

  const dropdowns = [
    document.getElementById('suggestions'),
    document.getElementById('genre-drop'),
    document.getElementById('profile-li'),
    document.getElementById('small-nav')
  ]

  const button = [
    document.getElementById('search-input'),
    document.getElementById('genre-drop-btn'),
    document.getElementById('profile-li-btn'),
    document.getElementById('small-nav-btn')
  ]

  const clickedInside = [...dropdowns, ...button].some((el) => el && el.contains(clickedElement))

  if(!clickedInside){
    clear()
    closeDropdowns()
  }

}