import React, { useState } from 'react'
import { Menu, Item, Icon, Form, Input } from 'semantic-ui-react'

import './NavBar.css';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { params } from '../../store/types';
import { getParamValue } from '../../utils/uri';

interface INavBar extends RouteComponentProps<params> {

}

const NavBar = (props: INavBar) => {
    const [searchInputState, setSearchState] = useState(getParamValue(props.location, 'search') || '');

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.currentTarget.value;
        setSearchState(() => value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const encodeUri = encodeURI(searchInputState!);
        props.history.push(`/result?search=${encodeUri}`)
    }

    return (<Menu borderless fixed="top" className="top_nav">
        <Link to="/">
            <Item className="top_nav_icon">
                <span><Icon size='large' name="youtube" /></span>
                <span className="top_nav_icon_title" style={{ marginLeft: '10px' }}>Youtube</span>
            </Item>
        </Link>
        <Menu.Menu className="top_nav_container">
            <Item className="search_input">
                <Form onSubmit={onSubmit}>
                    <Form.Field>
                        <Input
                            placeholder="Search"
                            value={searchInputState}
                            action={{ icon: 'search' }}
                            onChange={onSearchChange}
                        />
                    </Form.Field>
                </Form>
            </Item>
        </Menu.Menu>
    </Menu >
    );
}

export default withRouter(NavBar);