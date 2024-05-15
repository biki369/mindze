import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (pathname === '/') {
            localStorage.removeItem('activeTabBook');
            localStorage.removeItem('activeTabBlog');
            localStorage.removeItem('activeTabPhil')
        }
    }, [pathname]);

    return null;
}
