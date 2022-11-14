import { FC } from 'react';
import { Input, Button, Row, Col, Typography, Select } from 'antd';
import './MyCampaigns.css';
import { BUSINESS_UNIT_OPTIONS, PLATFORM_OPTIONS, STATUS_OPTIONS } from '../../utils/constants/CAMPAIGN_DATA';

const { Search } = Input;
const { Text } = Typography;

const MyCampaigns: FC = () => {
  const onSearch = (value: string) => console.log(value);

  /** Select Handlers Start */
  const handlePlatformChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleBusinessUnitChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleStatusChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  /** Select Handlers End */


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
          <Select
            showArrow
            allowClear
            mode="multiple"
            maxTagCount='responsive'
            style={{ width: '100%' }}
            placeholder="Select Platform"
            options={PLATFORM_OPTIONS}
            onChange={handlePlatformChange}
          />
        </Col>
        <Col span={4}>
          <Text className="filter-title" strong> Business Unit: </Text>
          <Select
            showArrow
            allowClear
            mode="multiple"
            maxTagCount='responsive'
            style={{ width: '100%' }}
            placeholder="Select Business Unit"
            options={BUSINESS_UNIT_OPTIONS}
            onChange={handleBusinessUnitChange}
          />
        </Col>
        <Col span={4}>
          <Text className="filter-title" strong> Status: </Text>
          <Select
            showArrow
            style={{ width: '100%' }}
            defaultValue={'active'}
            options={STATUS_OPTIONS}
            onChange={handleStatusChange}
          />
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