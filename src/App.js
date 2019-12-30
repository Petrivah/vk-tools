import React from 'react';
import { View, Panel, PanelHeader, Group, List, Cell, Div, Root, CellButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'view1'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <PanelHeader>Главный экран</PanelHeader>
            <Group>
              <CellButton onClick={() => this.setState({ activeView: 'view2' })}>
                Open View 2
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader>View 2</PanelHeader>
            <Group>
              <CellButton onClick={() => this.setState({ activeView: 'view1' })}>
                Back to View 1
              </CellButton>
            </Group>
          </Panel>
        </View>
      </Root>
    )
  }
}

export default App;
