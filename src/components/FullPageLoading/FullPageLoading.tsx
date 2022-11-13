import { Spin } from 'antd';
import './FullPageLoading.css';

const FullPageLoading = () => {
  return (
    <div className="loading-container">
      <Spin size="large" />
    </div>
  )
}

export default FullPageLoading;