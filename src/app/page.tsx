"use client";
import {useEffect, useState} from 'react';
import { Layout, Row, Col, Modal, Popover, Button, Switch } from 'antd';

import {HomePage} from "@/app/page.style.tsx";
import snakeLightSvg from '@/assets/svg/snake-Light.svg';
import siteProjectIcon1 from '@/assets/img/i1.png';
import siteProjectIcon2 from '@/assets/img/i2.png';
import siteProjectIcon3 from '@/assets/img/i3.png';
// import siteProjectIcon4 from '@/assets/img/i4.png';
// import siteProjectIcon5 from '@/assets/img/i5.png';
import siteProjectIcon6 from '@/assets/img/i6.png';
import githubSvgIcon from '@/assets/svg/github.svg';
import mailSvgIcon from '@/assets/svg/mail.svg';
import qqSvgIcon from '@/assets/svg/qq.svg';
import weixinSvgIcon from '@/assets/svg/weixin.svg';
import sponsorSvgIcon from '@/assets/svg/sponsor.svg';
import siteSvgIcon from "@/assets/svg/site.svg"
import projectSvgIcon from "@/assets/svg/project.svg"
import skillsSvgIcon from "@/assets/svg/skills.svg"
import skillPcSvgIcon from "@/assets/svg/skillPc.svg"
import skillWapSvgIcon from "@/assets/svg/skillWap.svg"
import qqImg from '@/assets/img/qqGroup.jpg';
import weixinImg from '@/assets/img/weixinGroup.jpg';
import sponsorImg from '@/assets/img/weixinSponsor.jpg';
import headPortraitKuang from '@/assets/img/head-portrait-kuang.png';
import location from "@/assets/svg/location.svg"
import briefcase from "@/assets/svg/briefcase.svg"
import policeBadge from "@/assets/img/policeBadge.png"



const { Footer, Content } = Layout;

export default function Home() {

    const [isDesktop, setIsDesktop] = useState(true); // 默认是桌面端
    const [isDarkMode, setIsDarkMode] = useState(false);// 控制是不是暗黑模式
    const [themeIcon,] = useState(snakeLightSvg); // 主题图标
    const [showModal,setShowModal] = useState(false); //qq弹框
    const [popPicture,setPopPicture] = useState(""); //弹框图片
    const [site, ] = useState([
        { title: "RocBlog", introduce: "程序员菜鲲的个人博客", img: siteProjectIcon2, link: "https://RocBlog.trainees.cn" },
        { title: "RocAdmin.Net", introduce: "基于.Net的鲲鹏中后台快速开发框架演示站", img: siteProjectIcon3, link: "https://RocAdmin.trainees.cn" },
        { title: "RocFlow.Net", introduce: "基于.Net的鲲鹏工作流快速开发框架演示站", img: siteProjectIcon6, link: "https://RocFlow.trainees.cn" },
        { title: "RocJilehe", introduce: "基于React的鸡乐盒演示站", img: siteProjectIcon6, link: "https://RocJilehe.trainees.cn" },
        { title: "RocAuthor(本站)", introduce: "基于React的程序员在线简历演示站", img: siteProjectIcon6, link: "https://RocAuthor.trainees.cn" },
    ]);// 网站
    const [project, ] = useState([
        { title: "RocAdmin.Net", introduce: "基于C#+.Net8+Abp.vNext9+Furion5+PostgreSql18+Vue3的DDD领域驱动微服务后台管理框架, 内置用户权限管理、日志、工作流、博客、社区、代码生成、Admin等模块,可根据需要新增模块即可轻松集成.，、", img: siteProjectIcon3, link: "https://github.com/DevCaikun/RocAdmin.Net" },
        { title: "RocFlow.Net", introduce: "基于RocAdmin.Net的工作流框架", img: siteProjectIcon6, link: "https://github.com/DevCaikun/RocFlow.Net" },
        { title: "RocBlog", introduce: "基于JDK21+SpringBoot3+PostgreSql18+React19的博客项目, 内置后台管理、权限管理、代码生成、资源导航、技术百科等模块", img: siteProjectIcon2, link: "https://github.com/DevCaikun/RocBlog" },
        { title: "RocAuthor", introduce: "炫酷唯美的 程序员专属 个人简介,采用TypeScript5 + Vite6 + Axios2 + React19 + AntDesign5 + SCSS2", img: siteProjectIcon1, link: "https://github.com/DevCaikun/RocAuthor" },
        { title: "RocJilehe", introduce: "唱、跳、rap、篮球,采用TypeScript5 + Vite6 + Axios2 + React19 + AntDesign5 + SCSS2", img: siteProjectIcon1, link: "https://github.com/DevCaikun/RocJilehe" },
    ]); // 项目
    const currentYear = new Date().getFullYear();

    // 点击qq或打赏图标的回调
    const showModalHandle = (img:string) => {
        if (img == "qq") {
            setPopPicture(qqImg.src);
        }
        if (img == "weixin") {
            setPopPicture(weixinImg.src);
        }
        if (img == "sponsor") {
            setPopPicture(sponsorImg.src);
        }
        setShowModal(true);
    };

    // 点击按钮切白天/黑夜模式
    const handleDarkLightClick = (isDark: boolean) => {
        setIsDarkMode(isDark);
        const newTheme = isDark ? 'dark' : 'light';
        // 存储到localStore避免刷新丢失
        localStorage.setItem('theme', newTheme);
        console.log("is",isDarkMode);
    };


    // 检查窗口是否大于 992px，并设置 isDesktop
    const checkIfDesktop = () => {
        // 992px 作为桌面端的标准
        setIsDesktop(window.innerWidth >= 992);
    };

    // 组件挂载时执行
    useEffect(() => {
        // 页面加载时检测屏幕尺寸
        checkIfDesktop();

        // 监听窗口变化
        window.addEventListener('resize', checkIfDesktop);

        // 第一次加载或刷新后从 localStorage 获取黑/白天设定
        const savedTheme = localStorage.getItem('theme');
        setIsDarkMode(savedTheme === 'dark');

        // 组件卸载时移除事件监听
        return () => {
            window.removeEventListener('resize', checkIfDesktop);
        };
    }, []); // 空依赖数组表示只在挂载和卸载时执行

    return (
        <HomePage>
            <Layout className={`${isDarkMode ? 'dark' : 'light'}`}>
                <Content>
                    <Row gutter={[16, 16]}>
                        {/*第一列：占5份，手机端隐藏*/}
                        {isDesktop && (
                            <Col className="layout-col-left" span={24} xs={0} sm={0} md={5} lg={5}>
                                <div className="head-portrait">
                                    <img style={{position: 'absolute',top:'-15%',left:'-10%',width: '120%', aspectRatio:' 1/1',}} src={headPortraitKuang.src} alt=""/>
                                </div>
                                <div className="left-div left-des">
                                    <div className="left-des-item">
                                        <img src={location.src} alt=""/>
                                        China-Guangzhou
                                    </div>
                                    <div className="left-des-item">
                                        <img src={briefcase.src} alt=""/>
                                        Technology Ltd.
                                    </div>
                                </div>
                                <div className="left-div left-tag">
                                    <div className="left-tag-item">网瘾</div>
                                    <div className="left-tag-item">小学生</div>
                                    <div className="left-tag-item">动漫</div>
                                    <div className="left-tag-item">《三体》</div>
                                    <div className="left-tag-item">Coding</div>
                                    <div className="left-tag-item">旅者</div>
                                    <div className="left-tag-item">骑行</div>
                                </div>
                                <div className="left-div left-time">
                                    <ul className="left-time-line">
                                        <li>
                                            <div className="focus"></div>
                                            <a className="link-text" href="https://rocflow.trainees.cn">RocFlow.Net<br/>：基于RocAdmin.Net的企业级工作流框架上线开源</a>
                                            <div>：2025.12</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <a className="link-text" href="https://rocadmin.trainees.cn">RocAdmin.Net<br/>：基于Abp.vNext9的企业级中后台快速开发框架上线开源</a>
                                            <div>：2025.7</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="https://rocauthor.trainees.cn">RocAuthor<br/>：基于React19的程序员在线简历上线开源</a>
                                            </div>
                                            <div>：2024.12</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="https://www.caikun.dev">RocBlog<br/>：基于Java21和React19技术博客知识库系统初版上线开源</a>
                                            </div>
                                            <div>：2024.10</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="#">加入广州XXX集团工业自动化领域<br/>：负责某新能源客户软件代码编写</a>
                                            </div>
                                            <div>：2023.6</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="#">捡起了碎的一地的IT知识</a>
                                            </div>
                                            <div>：2023.2</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="#">离职出来后洗心革面,决定专心学习巩固专业技能</a>
                                            </div>
                                            <div>：2022.6</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text" href="#">加入贵阳XX科技集团<br/>：负责某省东\南部某项业务的售后和运营</a>
                                            </div>
                                            <div>：2020.12</div>
                                        </li>
                                        <li>
                                            <div className="focus"></div>
                                            <div>
                                                <a className="link-text"
                                                   href="http://www.yangmufa.com">放暑假在家搭建人生第一个网站</a>
                                            </div>
                                            <div>：2018.8</div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        )}
                        {/*第二列：占19份，手机和电脑端都显示*/}
                        <Col className="layout-col-right" span={19} xs={24} sm={24} md={19} lg={19}>
                            {/*弹框-显示qq微信照片等*/}
                            <Modal open={showModal} onCancel={()=> setShowModal(false)} centered footer={null} closeIcon={null} title="" width={'auto'}>
                                <img src={popPicture} alt="" style={{maxWidth: '150px', maxHeight: '250px', margin: '0px',display:'flex',alignItems:'center',justifyContent:'center'}}/>
                            </Modal>
                            {!isDesktop && (
                                <div className="index-head-portrait">
                                    <img style={{position:'absolute',top:'-15%',left:'-10%',width:'120%',aspectRatio:'1/1',}} src={headPortraitKuang.src} alt=""/>
                                </div>
                            )}
                            <div className="welcome">
                                Hello I' m
                                <span className="gradientText">DevCaikun</span>
                                <h6>你好，我是程序员菜鲲</h6>
                            </div>
                            <div className="description">
                                👦
                                <span className="purpleText">C#.Net</span>&nbsp;
                                B/S&nbsp;
                                <span className="purpleText">Full Stack</span>&nbsp;
                                Developer
                            </div>
                            <div className="description">
                                📝 The only way to achieve greatness is to
                                <span className="purpleText textBackground">love</span>
                                and
                                <span className="purpleText textBackground">persevere</span> in what you do.
                            </div>
                            <div className="iconContainer">
                                <Popover title="" trigger="click" content={
                                    <div>
                                        <Button type="link" href="https://gitee.com/DevCaikun/TraineesHomepage">
                                            Gitee
                                        </Button>
                                        <br/>
                                        <Button type="link" href="https://github.com/DevCaikun/TraineesHomepage">
                                            Github
                                        </Button>
                                    </div>
                                }>
                                    <div className="iconItem">
                                        <img src={githubSvgIcon.src} alt=""/>
                                        <div className="iconTip">Git</div>
                                    </div>
                                </Popover>
                                {/* 第二个 Popover */}
                                <Popover title="网易邮箱" trigger="click" content={
                                    <Button type="link" href="https://mail.163.com">
                                        DevCaikun@163.com
                                    </Button>
                                }>
                                    <div className="iconItem">
                                        <img src={mailSvgIcon.src} alt=""/>
                                        <div className="iconTip">Mail</div>
                                    </div>
                                </Popover>
                                <a className="iconItem" onClick={()=>{showModalHandle('sponsor'); }} href="#">
                                    <img src={sponsorSvgIcon.src} alt=""/>
                                    <div className="iconTip">赞助</div>
                                </a>
                                <a className="iconItem" onClick={() => {showModalHandle('qq'); }} href="#">
                                    <img src={qqSvgIcon.src} alt=""/>
                                    <div className="iconTip">QQ</div>
                                </a>
                                <a className="iconItem" onClick={() => {showModalHandle('weixin'); }} href="#">
                                    <img src={weixinSvgIcon.src} alt=""/>
                                    <div className="iconTip">微信</div>
                                </a>
                                <a className="switch">
                                    <Switch checked={isDarkMode} onChange={handleDarkLightClick} checkedChildren="黑夜" unCheckedChildren="白天" defaultChecked={false} />
                                </a>
                            </div>
                            <div className="tanChiShe">
                                <img src={themeIcon.src} alt=""/>
                            </div>
                            <div className="title">
                                <img src={siteSvgIcon.src} alt=""/>
                                Site
                            </div>
                            <div className="projectList">
                                {site.map((siteData, index) => (
                                    <a
                                        key={index}
                                        className="projectItem a"
                                        target="_blank"
                                        href={siteData.link}
                                    >
                                        <div className="projectItemLeft">
                                            <h1>{siteData.title}</h1>
                                            <p>{siteData.introduce}</p>
                                        </div>
                                        <div className="projectItemRight">
                                            <img src={siteData.img.src} alt="" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="title">
                                <img src={projectSvgIcon.src} alt=""/>
                                Project
                            </div>
                            <div className="projectList">
                                {project.map((projectData, index) => (
                                    <a key={index} className="projectItem b" target="_blank" href={projectData.link}>
                                        <div className="projectItemLeft">
                                            <h1>{projectData.title}</h1>
                                            <p>{projectData.introduce}</p>
                                        </div>
                                        <div className="projectItemRight">
                                            <img src={projectData.img.src} alt=""/>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="title">
                                <img src={skillsSvgIcon.src} alt=""/>
                                Skills
                            </div>
                            <div className="skill">
                                <img className="skillPcImg" src={skillPcSvgIcon.src} alt="" srcSet=""/>
                                <img className="skillWapImg" src={skillWapSvgIcon.src} alt="" srcSet=""/>
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Footer className={`${isDarkMode ? 'dark' : 'light'} layout-footer`}>
                    <div className="layout-footer-left">
                        RocAuthor © {currentYear} Created by 程序员菜鲲
                    </div>
                    <div className="layout-footer-right">
                        <img
                            src={policeBadge.src}
                            alt=""
                            style={{ width: 15, height: 15, marginRight: 5 }}
                        />
                        <a
                            href="https://beian.miit.gov.cn"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            备案号：黔ICP备19007557号
                        </a>
                    </div>
                </Footer>
            </Layout>
        </HomePage>
    );
}
