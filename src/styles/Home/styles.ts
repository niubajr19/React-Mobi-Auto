import styled from 'styled-components'

interface ContainerProps {
    resulted: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, resulted }) =>
        resulted ? theme.color.result_page_background : theme.color.background};

    h1 {
        color: ${props => props.theme.color.text};

        font: 700 Roboto bold;

        text-align: center;
    }

    p {
        color: ${props => props.theme.color.text};
        font: 700 22px Roboto;

        text-align: center;
        margin: 15px 0;
    }
`

export const FormContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    padding: 20px 40px 30px 40px;

    background-color: ${({ theme }) => theme.color.inputs_background};
`

export const SpecificFormContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 20px;
`
export const ButtonContainer = styled.div`
    margin-top: 20px;
`