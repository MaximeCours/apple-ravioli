export function nav(element) {
  element.innerHTML = `		
<div class="content">
    <a href="/">Apple Ravioli</a>
    <div class="menu">
        <ul>
            <li class="active">
                <a href="#">Overview</a>
            </li>
            <li>
                <a href="#">Guided Tour</a>
            </li>
            <li>
                <a href="#">Tech Specs</a>
            </li>
        </ul>
        <a href="#">
            Pre-order
        </a>
    </div>
</div>`
}
