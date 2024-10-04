import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react'

const CardChakra: React.FC = () => (
    <Card maxW="sm">
    <CardBody>
      <Image
        src="https://www.mercedes-benz.com.mx/content/mexico/es/passengercars/models/suv/g-class/amg/_jcr_content/root/responsivegrid/simple_stage.component.damq1.3367910425136.jpg/mercedes-amg-g-class-w463-stage-3840x1707-08-2022.jpg"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading font-size="100px" color={"blue.500"}>Mercedez Benz</Heading>
        <Text>
        Mercedes-Benz es una marca alemana de automóviles de lujo, famosa por su innovación y calidad.
        </Text>
      </Stack>
    </CardBody>
    <Divider />
  </Card>
  );
  
  export default CardChakra;