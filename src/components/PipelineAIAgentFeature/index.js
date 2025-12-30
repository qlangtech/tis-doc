import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './css.css';
import Link from '@docusaurus/Link';
import BZhan from '/src/components/BZhan';

// 轮播图片配置
const carouselImages = [
    {
        src: require('@site/docs/guide/pipeline-ai-agent/tis5_0_0_1.png').default,
        alt: 'TIS Pipeline AI Agent 主界面'
    },
    {
        src: require('@site/docs/guide/pipeline-ai-agent/qwen_llm.png').default,
        alt: '支持千问大模型'
    },
    {
        src: require('@site/docs/guide/pipeline-ai-agent/deepseek_llm.png').default,
        alt: '支持Deepseek大模型'
    },
    {
        src: require('@site/docs/guide/pipeline-ai-agent/select_agent_job_prompt_template.png').default,
        alt: '可选择数据管道任务提示词模版'
    }
];

// 图片轮播组件
function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    // 自动轮播
    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 6000); // 6秒切换
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isPaused]);

    // 手动切换到上一张
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    // 手动切换到下一张
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // 跳转到指定图片
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-wrapper">
            {/* 左箭头 */}
            <button
                className="carousel-arrow carousel-arrow-left"
                onClick={handlePrev}
                aria-label="上一张"
            >
                ‹
            </button>

            {/* 轮播容器 */}
            <div
                className="carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* 图片展示区 */}
                <div className="carousel-images">
                    {carouselImages.map((image, index) => (
                        <a
                            key={index}
                            data-fancybox="ai-agent-gallery"
                            href={image.src}
                            className={clsx('carousel-image-wrapper', {
                                'active': index === currentIndex
                            })}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="feature-screenshot"
                            />
                        </a>
                    ))}
                </div>

                {/* 底部指示器 */}
                <div className="carousel-indicators">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            className={clsx('carousel-dot', {
                                'active': index === currentIndex
                            })}
                            onClick={() => handleDotClick(index)}
                            aria-label={`跳转到第${index + 1}张`}
                        />
                    ))}
                </div>
            </div>

            {/* 右箭头 */}
            <button
                className="carousel-arrow carousel-arrow-right"
                onClick={handleNext}
                aria-label="下一张"
            >
                ›
            </button>
        </div>
    );
}

export default function PipelineAIAgentFeature() {
    return (
        <div className="pipeline-ai-agent-wrapper">
            <div className="container pipeline-ai-agent">
                <div className="row">
                    <div className={clsx('col col--6 ai-agent-desc')}>
                        <h2>提供Pipeline AI Agent - 让数据管道听懂人话</h2>
                        <h3>国内首个大数据原生 AI Agent,对话式创建数据管道</h3>

                        <div className="feature-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon icon-target">➜</span>
                                <span className="highlight-text">告别复杂配置,自然语言描述需求即可创建管道</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon icon-brain">◆</span>
                                <span className="highlight-text">智能插件检测与自动安装,LLM辅助参数生成</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon icon-bolt">★</span>
                                <span className="highlight-text">支持DeepSeek/通义千问等国产模型,成本低至几毛钱</span>
                            </div>
                        </div>

                        <div className="ai-agent-actions">
                            <Link
                                className="button button--primary button--lg"
                                to="/docs/guide/pipeline-ai-agent">
                                立即了解
                            </Link>
                        </div>
                    </div>
                    <div className={clsx('col col--6 ai-agent-image')}>
                        <BZhan bvid="BV1E5vsBXED4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
