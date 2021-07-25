import React from 'react';
import "./FooterCol.css"

const FooterCol = (props) => {
    return (
        <div  class="col-md-3 columnContainer pb-5">
            <h6 class="text-center py-5 fw-bold">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul class="list-unstyled ">
                {
                    props.menuItems.map((item, index) => <li class="mt-3 text-center" key={index}>{item.name}</li>)
                }
            </ul>

        </div>

    );
};

export default FooterCol;