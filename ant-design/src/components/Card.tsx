import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardAnt: React.FC = () => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img className="card-image" alt="example" src="https://www.mercedes-benz.com.mx/content/mexico/es/passengercars/models/suv/g-class/amg/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3367910425136.jpg/mercedes-amg-g-class-w463-stage-3840x1707-08-2022.jpg" />}
  >
    <Meta 
    title={<span className="card-title">Mercedes Benz</span>}
    description={<span className="card-description">Mercedes-Benz es una marca alemana de automóviles de lujo, famosa por su innovación y calidad.</span>}
    />
  </Card>
);

export default CardAnt;