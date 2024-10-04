import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardMat: React.FC = () => (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardMedia
        sx={{ height: 340}}
        image="https://www.mercedes-benz.com.mx/content/mexico/es/passengercars/models/suv/g-class/amg/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3367910425136.jpg/mercedes-amg-g-class-w463-stage-3840x1707-08-2022.jpg"
        title="Clase G AMG SUV 4x4"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="#54ab8e">
          Mercedes Benz
        </Typography>
        <Typography variant="body2" color="black">
        Mercedes-Benz es una marca alemana de automóviles de lujo, famosa por su innovación y calidad.
        </Typography>
      </CardContent>
    </Card>
  );
  
  export default CardMat;