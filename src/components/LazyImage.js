import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  title,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // 预加载图片
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setIsLoaded(true);
          };
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '50px' // 提前50px开始加载
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // SEO优化：提供合理的默认值
  const imgAlt = alt || 'TIS数据集成平台相关图片';
  const imgTitle = title || alt || 'TIS零代码数据集成工具';

  return (
    <div
      ref={imgRef}
      className={className}
      style={{
        ...style,
        minHeight: height || '200px',
        minWidth: width,
        backgroundColor: isLoaded ? 'transparent' : '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      {...props}
    >
      {isInView && (
        <img
          src={src}
          alt={imgAlt}
          title={imgTitle}
          width={width}
          height={height}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      )}
      {!isLoaded && isInView && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#999',
          fontSize: '14px'
        }}>
          加载中...
        </div>
      )}
    </div>
  );
};

export default LazyImage;