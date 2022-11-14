import { FC } from 'react';
import { Space, Input, Button, Row, Col, Typography } from 'antd';
import './MyCampaigns.css';

const { Search } = Input;
const { Text } = Typography;

const MyCampaigns: FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <div className="campaign-container">
      <Text className="campaign-heading" strong> My Campaigns </Text>

      <div className="search-container">
        <Search placeholder="Search" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <Button type="primary" shape="round" ghost>
          Filters
        </Button>
      </div>


      <Row gutter={16}>
        <Col span={4}>
          <Text className="filter-title" strong> Platform: </Text>
        </Col>
        <Col span={4}>
          <Text className="filter-title" strong> Business Unit: </Text>
        </Col>
        <Col span={4}>
          <Text className="filter-title" strong> Status: </Text>
        </Col>
        <Col span={4}>
          <Button type="primary" shape="round" ghost>
            Clear All
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default MyCampaigns;