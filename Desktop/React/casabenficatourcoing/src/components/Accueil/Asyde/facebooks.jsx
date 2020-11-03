import { css } from 'jquery';
import React, { Component } from 'react';
import './miniCaroussel/miniCarrouselHomePage.css';

const Facebook = () => {
    return ( 
        <div className="">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcasadobenfica.tourcoing%2F&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                style={{border:"none",overflow:"hidden",width:'100%'}}
                scrolling="no" 
                frameborder="0" 
                allowTransparency="true" 
                allow="encrypted-media"
                >
            </iframe>
            {/* 
            .embed-responsive-21by9
            .embed-responsive-16by9
            .embed-responsive-4by3
            .embed-responsive-1by1
            */}
        </div>
             );
}
export default Facebook ;