import React from 'react';

// bu komponeti kullanabilmek için mutlaka width değeri olan bir componentin çocuğu olmalı
// gösterilecek ikonun büyüklüğü parentin style değerleri ile belirleniyor. 

const Icon = props => {
    const Svg = props.svg;
    return (
        <Svg width="100%" height="100%" style={props.iconStyle} />
    );
};

export default Icon;