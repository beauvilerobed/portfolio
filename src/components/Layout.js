import React from 'react';
 
function Layout(props) {
  return (
<div id="container">
    <div id="wrapper">
        <div id="content">
                    <p><strong>1. Main Content</strong></p>
                    <h3>The Ultimate Guide to Flexbox </h3>
                    <p>The Flex Layout module is new layout module in CSS3 made to improve the items align, directions and order
                        in the container even when they are with dynamic or even unknown size. The prime characteristic of the
                        flex container is the ability to modify the width or height of its children to fill the available space
                        in the best possible way on different screen sizes.
                    </p>
                    <p>Flexbox is relatively new, but it enjoys excellent browser support today (nearly 83% of browsers support
                        Flexbox). Flexbox Layout is used for small application components, whereas CSS Grid Layout Module is
                        aimed to handle the large scale layouts.
                    </p>
                    <h3>The Two axes of Flexbox</h3>
            <p>When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The
                main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it.
                Everything we do with flexbox refers back to these axes, so it is worth understanding how they work from
                the outset.
            </p>
                </div>
            </div>
            <div id="navigation">
                <p><strong>2. Navigation Menu</strong></p>
                <h3>Styling Flex Container</h3>
                <ul>
                    <li>flex-direction</li>
                    <li>flex-wrap</li>
                    <li>justify-content</li>
                    <li>align-content</li>
                    <li>align-items</li>
                </ul>
                <h3>Designing Flex Items </h3>
                <ul>
                    <li>order</li>
                    <li>align-self</li>
                    <li>flex-grow</li>
                    <li>flex-shrink</li>
                    <li>flex-basis</li>
                </ul>
            </div>
            <div id="extra" className="tm-bg-gray">
                <p><strong>3. Additional Stuff</strong></p>
                <h3>In this guide you will learn:</h3>
                <ul>
                    <li>How to use CSS Flexbox to build modern layouts</li>
                    <li>How to align items both vertically and horizontally</li>
                    <li>How to order items within container</li>
                </ul>
            </div>
    </div> 
  )
}
 
export default Layout;