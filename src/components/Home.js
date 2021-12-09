import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title = 'Model S'
        description = 'Order Online for touchless delivery'
        backgroudImg = 'model-s.jpg'
        leftBtnText = 'Cusmon order'
        rightBtnText = 'Existing inventory'
      />

      <Section
        title = 'Model Y'
        description = 'Order Online for touchless delivery'
        backgroudImg = 'model-y.jpg'
        leftBtnText = 'Cusmon order'
        rightBtnText = 'Existing inventory'
      />

      <Section
        title = 'Model 3'
        description = 'Order Online for touchless delivery'
        backgroudImg = 'model-3.jpg'
        leftBtnText = 'Cusmon order'
        rightBtnText = 'Existing inventory'
      />

      <Section
        title = 'Model X'
        description = 'Order Online for touchless delivery'
        backgroudImg = 'model-x.jpg'
        leftBtnText = 'Cusmon order'
        rightBtnText = 'Existing inventory'
      />

      <Section
        title = 'Lowest cost solar panels in America'
        description = 'Money-back guarantee'
        backgroudImg = 'solar-panel.jpg'
        leftBtnText = 'Order now'
        rightBtnText = 'Learn more'
      />

      <Section
        title = 'Solar for new Roofs'
        description = 'Solar Roof costs less than a new Roof plus solar panels'
        backgroudImg = 'solar-roof.jpg'
        leftBtnText = 'Order now'
        rightBtnText = 'Learn more'
      />

      <Section
        title = 'Accessories'
        description = ''
        backgroudImg = 'accessories.jpg'
        leftBtnText = 'Shop now'
      />

    </Container>
  )
}

export default Home


const Container = styled.div `
  height: 100vh;
`