import React from 'react';

import BodyDetalhesProduto from '../../components/BodyDetalhesProduto';
import HeaderSistema from '../../components/HeaderSistema';
import FooterSistema from '../../components/FooterSistema';

export default function DetalheProduto() {
    return (
        <>
            <HeaderSistema />
            <BodyDetalhesProduto />
            <FooterSistema />
        </>
    );
}
