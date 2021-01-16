import React, { useState, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Loader from './Loader';
import css from 'styled-jsx/css';

export interface IProps {
    children: ReactElement,
};

const styles = css`
    .loading-container {
        display: flex;
        justify-content: center;
    }
`;

const Loading = ({ children }: IProps) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);
  
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
  
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return loading ? (
        <div className="loading-container">
            <style jsx>{styles}</style>
            <Loader size="big" />
        </div>
     ) : children ;
}

export default Loading;