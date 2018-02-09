import React, { PureComponent } from 'react'
import { Manager, Target, Popper, Arrow } from '../src/react-popper'

class OpenableExample extends PureComponent {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    return (
      <div>
        <h2>Openable Popper Example</h2>
        <Manager>
          <Target
            style={{ width: 120, height: 120, background: '#b4da55' }}
            onClick={this.handleClick}
          >
            Click {this.state.isOpen ? 'to hide' : 'to show'} popper
          </Target>
          {this.state.isOpen && (
            <Popper className="popper">
              Popper Content for Openable Example
              <Arrow className="popper__arrow" />
            </Popper>
          )}
        </Manager>
      </div>
    )
  }
}

export default OpenableExample
