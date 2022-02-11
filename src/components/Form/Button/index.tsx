import React, { forwardRef } from 'react'

import MuiButton, {
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button'

import { Container, Loading } from './styles'

export type ButtonProps = {
  loading?: boolean
  component?: React.ElementType
} & MuiButtonProps

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { loading, ...rest },
  ref,
) => {
  return (
    <Container fullWidth={rest.fullWidth}>
      <MuiButton style={{borderRadius: 12.5}} {...rest} disabled={loading || rest.disabled} ref={ref} />
      {loading && <Loading size={20} color="primary" />}
    </Container>
  )
}

export default forwardRef(Button)
