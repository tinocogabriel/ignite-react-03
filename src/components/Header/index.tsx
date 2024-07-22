import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import dtmoneyLogo from '../../assets/dtmoney-logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtmoneyLogo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
