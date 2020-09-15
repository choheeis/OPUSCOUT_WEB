import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

const PageCountStyle = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    width: 100%;
`;

function PageCount() {
    return(
        <PageCountStyle>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
        </PageCountStyle>
    )
}

export default PageCount;