import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.scss';

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className='page'>
      
        <span className='tags top-tags'>
          <span className='tag-html'>&lt;html&gt;</span>
          <br/>&lt;body&gt;</span>

        <Outlet />
        
        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    
    </>
  )
}

export default Layout;