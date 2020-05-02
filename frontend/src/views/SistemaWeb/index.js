import React from 'react';
import './styles.css';
import FooterSistema from '../../components/FooterSistema';
import HeaderSistema from '../../components/HeaderSistema';
import BodySistema from '../../components/BodySistema';

export default function SistemaWeb() {
    return (
        <>
            <HeaderSistema class="Header" />
            <BodySistema class="Body" />
            <FooterSistema class="Footer" />
        </>
    );
}
