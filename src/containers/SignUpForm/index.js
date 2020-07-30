import React from 'react';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Header1 from '../../components/Header1';
import Icon from '../../components/Icon';
import InputField from '../../components/InputField';
import InputDropdown from '../../components/InputDropdown';
import Main from '../../components/Main';
import NavigationHeader from '../../components/NavigationHeader';
import Paragraph from '../../components/Paragraph';
import Row from '../../components/Row';
import Subheader from '../../components/Subheader';

export default () => (
  <Main style={{ justifyContent: 'space-between', alignItems: 'center' }}>
    <Header1>
      <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
        <Icon liga="bars" />
        <Icon liga="ellipsis-v" />
        <Paragraph>
          SIGN UP
        </Paragraph>
      </Row>
    </Header1>
    <NavigationHeader>
      <Paragraph>
        Text
      </Paragraph>
    </NavigationHeader>
    <Row style={{ justifyContent: 'center', flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <InputField placeholder="First Name" style={{ width: '120px' }} />
      <InputField placeholder="Last name" style={{ width: '120px' }} />
    </Row>
    <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Paragraph>
        Text
      </Paragraph>
      <InputField placeholder="Email" style={{ width: 'calc(100% - 20px)' }} />
      <Paragraph>
        Text
      </Paragraph>
    </Row>
    <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Paragraph>
        Text
      </Paragraph>
      <InputField placeholder="Password" style={{ width: 'calc(100% - 20px)' }} />
      <Paragraph>
        Text
      </Paragraph>
    </Row>
    <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Paragraph>
        Text
      </Paragraph>
      <InputField placeholder="Confirm password" style={{ width: 'calc(100% - 20px)' }} />
      <Paragraph>
        Text
      </Paragraph>
    </Row>
    <Row style={{ flexGrow: '0', minWidth: '50px', minHeight: '50px' }}>
      <Paragraph>
        Text
      </Paragraph>
      <InputDropdown style={{ width: 'calc(100% - 20px)' }} />
      <Paragraph>
        Text
      </Paragraph>
    </Row>
    <NavigationHeader>
      <Checkbox />
      <Subheader style={{ width: 'calc(100% - 20px)' }}>
        i accept the terms uses and privacy policy
      </Subheader>
    </NavigationHeader>
    <Button>
      SIGN UP
    </Button>
    <Paragraph>
      Et
    </Paragraph>
    <Header1>
      <Paragraph style={{ textAlign: 'center', justifyContent: 'center', width: 'calc(100% - 20px)' }}>
        Already have an account ? Sign in
      </Paragraph>
    </Header1>
  </Main>
);
