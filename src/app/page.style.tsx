"use client";
import styled from "styled-components";


import background from "@/assets/img/background.jpg";
import headPortrait from "@/assets/img/head-portrait.jpg";

export const HomePage = styled.div`

    @font-face {
        font-family: "a";
        /*中文字体*/
        src: url("/fonts/Pacifico-Regular.ttf");
        font-display: swap;
    }
    @font-face {
        font-family: "b";
        src: url("/fonts/Pacifico-Regular.ttf");
        font-display: swap;
    }
    @font-face {
        font-family: "title";
        /*英文字体*/
        src: url("/fonts/Pacifico-Regular.ttf");
        font-display: swap;
    }
    :root {
        --main_text_color: #000000;
        --main_bg_color: linear-gradient(50deg, #a2d0ff, #ffffff);
    }
    /* 设置滚动条样式 */
    ::-webkit-scrollbar {
        width: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--main_text_color);
        border-radius: 8px;
        height: 20%;
    }
    ::-webkit-scrollbar-track {
        background: var(--main_bg_color); /* 使用 background 而不是 background-color */
    }

    /* 默认白天模式 */
    .light {
        background-color: rgba(255, 255, 255, 0.005) !important;
    }
    /* 黑夜模式 */
    .dark {
        background-color: rgba(0, 0, 0, 0.7) !important;
    }

    a:hover,
    a:link,
    a:visited,
    a:active,
    a:focus {
        text-decoration: none;
        outline: none;
        border: none;
        color: inherit;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    
    /*相对根元素样式*/
    width: 100vw;
    height: 100vh;
    background-image: url(${background.src});
    background-size: cover;
    background-position: center;

    //PC端
    .ant-layout {
        width: 100% !important;
        height: 100% !important;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
        background-blend-mode: multiply;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(5px);
        .ant-layout-content {
            width: 100%;
            height: 95%;
            padding: 0 15%;
            .ant-row {
                height: 100%;
                .layout-col-left {
                    margin: 0%;
                    height: 100%;
                    overflow-y: scroll;
                    display: flex;
                    padding: 0 15px;
                    position: sticky;
                    top: 0;
                    left: 0;
                    align-items: center;
                    flex-direction: column;
                    color: white;
                    .head-portrait {
                        flex-shrink: 0;
                        width: 80%;
                        position: relative;
                        aspect-ratio: 1/1;
                        margin-top: 50px;
                        background-size: cover;
                        border-radius: 50%;
                        background-image: url(${headPortrait.src});
                    }
                    .left-div {
                        flex-shrink: 0;
                        width: 100%;
                        border-radius: 13px;
                        margin-top: 15px;
                        padding: 20px;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    .left-des {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .left-des-item {
                            display: flex;
                            align-items: center;
                            line-height: 20px;
                            font-size: 15px;
                            margin-bottom: 5px;
                            overflow: hidden;
                            img {
                                width: 26px;
                                height: 26px;
                                fill: var(--fill);
                                font-size: 18px;
                                margin-right: 10px;
                            }
                        }
                    }
                    .left-tag {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        padding: 14px;
                        .left-tag-item {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 28px;
                            margin: 0px 5px 5px 0;
                            padding: 10px;
                            font-size: 13px;
                            border-radius: 111px;
                            background: rgba(27, 42, 57, 0.2);
                        }
                    }
                    .left-time {
                        .left-time-line {
                            width: 100%;
                            max-height: 270px;
                            font-size: 13px;
                            padding-left: 8px;
                            scroll-snap-type: y mandatory;
                            overflow-y: scroll;
                            li {
                                list-style: none;
                                position: relative;
                                padding: 15px 0px 0px 15px;
                                border-left: 2px solid #d5d5d5;
                                border-radius: 0;
                                scroll-snap-align: end;
                                color: #ffffff;
                                .focus {
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 22px;
                                    background-color: rgb(255, 255, 255);
                                    border: 2px solid #fff;
                                    position: absolute;
                                    left: -5px;
                                    top: 50%;
                                }
                                .link-text {
                                    word-wrap: break-word;
                                    word-break: break-word;
                                    overflow-wrap: break-word;
                                    white-space: normal;
                                }
                            }
                            li:first-child {
                                .focus:first-child {
                                    background-color: #aaffcd;
                                    animation: focus 1.8s ease infinite;
                                }
                            }
                        }
                        .left-time-line::-webkit-scrollbar {
                            display: none;
                        }
                    }
                }
                .layout-col-left::-webkit-scrollbar {
                    display: none;
                }
                .layout-col-right {
                    height: 100%;
                    padding: 40px 0px;
                    display: flex;
                    flex-direction: column;
                    overflow-y: scroll;
                    color: white;
                    .index-head-portrait {
                        flex-shrink: 0;
                        width: 40%;
                        margin-top: 40px;
                        position: relative;
                        max-width: 200px;
                        aspect-ratio: 1/1;
                        background-size: cover;
                        border-radius: 50%;
                        border: 0.5px solid #ffffff;
                        background-image: url(${headPortrait.src});
                    }
                    .welcome {
                        font-size: 60px;
                        font-weight: 500;
                        margin: 20px 0;
                        position: relative;
                        .gradientText {
                            -webkit-background-clip: text;
                            font-family: "title";
                            -webkit-text-fill-color: transparent;
                            background-size: 200%;
                            background-position: 0%;
                            animation: backgroundSizeAnimation 10s ease-in-out infinite;
                            background-image: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
                        }
                        h6 {
                            margin: 0;
                            position: relative;
                            left: 0;
                            right: 0;
                            transform: scaleY(1);
                            opacity: 0.5;
                            filter: blur(2px);
                        }
                    }
                    .description {
                        font-size: 20px;
                        margin-top: 7px;
                        .purpleText {
                            color: #747bff;
                            font-weight: 800;
                        }
                        .textBackground {
                            font-weight: 800;
                            background: rgba(19, 20, 24, 0.2);
                            border-radius: 5px;
                            font-size: 17px;
                            margin: 0 3px;
                            padding: 2px 4px;
                        }
                    }
                    .iconContainer {
                        width: 100%;
                        height: auto;
                        display: flex;
                        align-items: center;
                        margin-top: 2.50rem;
                        flex-wrap: wrap;
                        justify-content: start;
                        .iconItem {
                            width: 49px;
                            height: 43px;
                            box-sizing: border-box;
                            border-radius: 7px;
                            display: flex;
                            margin-left: 1rem;
                            margin-bottom: 5px;
                            backdrop-filter: blur(0px);
                            background: rgba(249, 250, 251, 0.2);
                            align-items: center;
                            justify-content: center;
                            transition: width 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
                            flex-shrink: 0;
                            cursor: pointer;
                            img {
                                width: 29px;
                                height: 29px;
                                fill: #ffffff;
                                font-size: 22px;
                                margin-right: 3px;
                            }
                            .iconTip {
                                white-space: nowrap;
                                display: none;
                            }
                        }
                        .iconItem:hover {
                            width: 85px;
                            transform: translateY(-2px);
                            background: rgba(249, 250, 251, 0.2);
                        }
                        .iconItem:hover .iconTip {
                            display: block;
                        }
                        .switch {
                            width: 59px;
                            height: 43px;
                            box-sizing: border-box;
                            border-radius: 7px;
                            display: flex;
                            margin-left: 1rem;
                            margin-bottom: 5px;
                            backdrop-filter: blur(0px);
                            background: rgba(249, 250, 251, 0.2);
                            align-items: center;
                            justify-content: center;
                            transition: width 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
                            flex-shrink: 0;
                            cursor: pointer;
                            .ant-switch-checked {
                                display: flex;
                                align-items: center;

                                .ant-switch-inner {
                                    text-align: center;
                                }
                            }
                        }
                        .switch:hover {
                            width: 85px;
                            background: rgba(249, 250, 251, 0.2);
                        }
                    }
                    .iconContainer::-webkit-scrollbar {
                        display: none;
                    }
                    .tanChiShe {
                        width: 99%;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .title {
                        display: flex;
                        align-items: center;
                        font-size: 26px;
                        font-weight: 800;
                        margin: 20px 0;
                        transition: transform 0.4s ease;
                        img {
                            margin-right: 8px;
                            height: 26px;
                            width: 26px;
                            fill: #ffffff;
                        }
                    }
                    .title:hover {
                        transform: translateY(-5px);
                    }
                    .projectList {
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-wrap: wrap;
                        .projectItem {
                            width: calc(25% - 5px);
                            margin: 5px 5px;
                            border-radius: 8px;
                            padding: 15px;
                            display: flex;
                            background-color: rgba(249, 250, 251, 0.22);
                            backdrop-filter: blur(0px);
                            -webkit-backdrop-filter: blur(0px);
                            transition: opacity 0.5s ease, background-color 0.2s ease, border 0.2s ease, transform 0.3s ease;
                            .projectItemLeft {
                                transition: width 0.4s ease;
                                width: 80%;
                                p {
                                    font-size: 12px;
                                    margin-top: 15px;
                                    color: rgb(228, 228, 228);
                                    word-wrap: break-word;
                                    word-break: break-word;
                                    overflow-wrap: break-word;
                                    white-space: normal;
                                }
                                h1 {
                                    font-weight: normal;
                                    font-size: 16px;
                                    margin: 0px;
                                    transition: font-size 0.4s ease;
                                    color: rgb(255, 255, 255);
                                }
                            }
                            .projectItemRight {
                                overflow: hidden;
                                transition: width 0.4s ease;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 20%;
                                img {
                                    height: 39px;
                                    width: 39px;
                                }
                            }
                        }
                        .projectItem.pressed {
                            transform: scale(0.9);
                            background-color: rgb(19, 23, 27);
                        }
                        .projectItem:hover {
                            box-shadow: 0 8px 16px -4px #2c2d300c;
                            transform: translateY(-2px);
                            .projectItemLeft {
                                width: 100%;
                            }

                            .projectItemRight {
                                width: 0%;
                                img {
                                    transform: rotate(40deg);
                                }
                            }
                            h1 {
                                font-size: 18px;
                            }
                        }
                    }
                    .skill {
                        padding: 5px 5px 5px 5px;
                        width: 100%;
                        .skillPcImg {
                            width: 100%;
                            display: block !important;
                        }
                        .skillWapImg {
                            display: none !important;
                        }
                    }
                }
                .layout-col-right::-webkit-scrollbar {
                    display: none; /* 隐藏滚动条 */
                }
            }
        }
        .layout-footer {
            width: 100%;
            height: 5%;
            padding: 0 5%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.2);

            .layout-footer-left {
                display: flex;
                align-items: center;
                color: white;
            }

            .layout-footer-right {
                display: flex;
                align-items: center;
                color: white;

                a {
                    color: white;
                }
            }
        }
    }
    
    /*手机端*/
    @media (max-width: 991px) {
        .ant-layout {
            .ant-layout-content{
                padding: 0 5% !important;
                .ant-row{
                    height: 100%;
                    .layout-col-left {
                        .head-portrait {
                        }
                        .left-div {
                        }
                        .left-des {
                            .left-des-item {
                                img{
                                }
                            }
                        }
                        .left-tag {
                            .left-tag-item {
                            }
                        }
                        .left-time {
                            .left-time-line {
                                li {
                                    .focus {
                                    }
                                }
                                //第一个 li 子元素的第一个 .focus 子元素。
                                li:first-child {
                                    .focus:first-child {
                                        background-color: #aaffcd;
                                        animation: focus 1.8s ease infinite;
                                    }
                                }
                            }
                            //选中 left-time-line 元素的滚动条，并将其隐藏
                            .left-time-line::-webkit-scrollbar {
                                display: none;
                            }
                        }
                    }
                    //滚动条设置为不显示
                    .layout-col-left::-webkit-scrollbar {
                    }
                    .layout-col-right {
                        padding: 20px 0px !important;
                        .index-head-portrait {
                        }
                        .welcome {
                            font-size: 45px !important;
                            font-weight: 500;
                            .gradientText {
                            }
                            h6{
                            }
                        }
                        .description {
                            font-size: 18px !important;
                            .purpleText {
                                font-weight: 500;
                            }
                            .textBackground {
                                font-weight: 500;
                                border-radius: 5px;
                                font-size: 17px;
                                margin: 0 3px;
                                padding: 2px 4px;
                            }
                        }
                        .iconContainer {
                            margin-top: 4rem !important;
                            .iconItem {
                                margin-left: 1rem;
                                img {
                                    width: 22px;
                                    height: 22px;
                                    fill:#ffffff;;
                                    font-size: 22px;
                                    margin-right: 3px;
                                }
                                .iconTip {
                                }
                            }
                            .iconItem:hover {
                            }
                            .iconItem:hover .iconTip {
                            }
                            .switch {
                                margin-left: 1rem !important;
                            }
                            .switch:hover {
                            }
                        }
                        .iconContainer::-webkit-scrollbar {
                        }
                        .tanChiShe {
                            img {
                            }
                        }

                        .title {
                            font-size: 20px !important;
                            font-weight: 600 !important;
                            margin: 15px 0 !important;
                            img {
                            }
                        }
                        .title:hover {
                        }
                        .projectList {
                            //display: flex;
                            //flex-wrap: wrap;
                            //align-items: center;
                            //justify-content: center;
                            .projectItem {
                                width: calc(46.5% - 0px) !important;
                                padding: 10px !important;
                                .projectItemLeft {

                                    h1 {
                                        font-size: 14px !important;
                                    }
                                    p {
                                        margin: 5px 0px !important;
                                        font-size: 11px !important;
                                    }
                                }
                                .projectItemRight {
                                    img {
                                        height: 29px !important;
                                        width: 29px !important;
                                    }
                                }
                            }
                            .projectItem.pressed {
                            }
                            .projectItem:hover {
                                .projectItemLeft {
                                    width: 100%;
                                }
                                .projectItemRight {
                                    width: 0%;
                                    img {
                                    }
                                }
                                h1 {
                                    font-size: 18px;
                                }
                            }
                        }
                        .skill {
                            .skillPcImg {
                                display: none !important;
                            }
                            .skillWapImg {
                                display: block !important;
                                width: 100%;
                            }
                        }
                    }
                }
            }
            .layout-footer{
                width: 100%;
                height: 5%;
                padding: 0 5%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: rgb(0, 0, 0,0.2);
                .layout-footer-left{
                    display: flex;
                    align-items: center;
                    color: white;
                }
                .layout-footer-right{
                    display: flex;
                    align-items: center;
                    color: white;
                    a{color: white;}
                }
            }
        }
    }

`;