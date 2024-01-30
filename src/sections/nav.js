export function nav(element) {
  element.innerHTML = `<div class="nav-container">
        <div class="nav-logo">
            <img src="/img/logo.png" alt="logo">
        </div>
        <div class="nav-links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>`
}
