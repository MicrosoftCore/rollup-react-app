/** use proxy */
import React from 'react';
import { Button } from 'antd-mobile';
import { Card, DatePicker, Calendar as MyCalendar } from 'antd-mobile';
import { Ellipsis, ErrorBlock, AutoCenter } from 'antd-mobile';
import { Grid as MyGrid } from 'antd-mobile';
import * as AntdMobile from 'antd-mobile';
import { TabBar } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import moduleName from 'antd-mobile';
// import List from './List';

const { VirtualInput: bbb, createErrorBlock } = AntdMobile

export function App() {
   return (
      <div>
         <div>Rollup is amazing!!!</div>
         <Button color='primary'>Rollup is amazing!!!</Button>
         <AntdMobile.Badge>88</AntdMobile.Badge>
         <MyCalendar></MyCalendar>
      </div>
   );
}

const bb = AntdMobile

export { bb, MyCalendar }

export { MyCalendar as ExportMyCalendar }

export { Ellipsis as ExportEllipsis }

export { NumberKeyboard } from 'antd-mobile'

export { AntdMobile, ErrorBlock }

export { createErrorBlock }

export * as AllAntdMobile from 'antd-mobile'

export { TabBar }

export { Tabs as MyTabs }

export * as ExportAntd from 'antd-mobile'

export default createErrorBlock;