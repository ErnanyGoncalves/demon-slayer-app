import styled from 'styled-components'
import { PageHeaderProps } from '../../types/PageHeader';


const PageHeaderWrapper = styled.header`
    h1{
        color:var(--black);
        margin: 60px 0 0 0;
        span{
            color:var(--red);
        }
    }

    .hr{
        width: 157px;
        height: 2px;
        background-color: var(--black);
        margin: 24px 0 8px 0;
    }
    
`;

export const PageHeader = ({ highlight, title }: PageHeaderProps) => {
    return (
        <PageHeaderWrapper>
            <h1><span>{highlight && highlight+" "}</span>{title}</h1>
            <div className='hr'/>
        </PageHeaderWrapper>
    )
}