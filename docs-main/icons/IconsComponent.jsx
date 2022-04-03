import React from 'react'
import {useState, useEffect} from "react";
import './icons.scss'
import iconList from "./iconList";


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

<SyntaxHighlighter language="javascript" style={nightOwl}>
    {reactImportString}
</SyntaxHighlighter>


import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";

const groups = ['Navigasjon', 'Vær', 'Brand', 'Smily', 'Generelt'];

const IconsComponent = () => {

    useEffect(() => {
        init('');
    }, []);

    const [search, setSearch] = useState("");
    const [showModalClass, setShowModalClass] = useState("");
    const [svgImport, setSvgImport] = useState("");
    const [reactImport, setReactImport] = useState("");

    const [activeName, setActiveName] = useState("");
    const [activeIcon, setActiveIcon] = useState("");

    const [iconAmount, setIconAmount] = useState(0);
    let [filteredArray, setFilteredArray] = useState([]);

    const init = (value) => {
        setSearch(value);
        setIcons(value);
    }

    const setIcons = (searchString) => {
        let localArray = []
        setIconAmount(0);

        groups.forEach(function (value, index) {
            localArray[value] = [];
        })

        for (const [key, value] of Object.entries(iconList)) {

            if (filterArray(searchString, value)) {
                continue;
            }

            if (value.hasOwnProperty('group') && value.group !== '') {
                localArray[value.group].push(value);
            } else {
                localArray['Generelt'].push(value);
            }
        }
        setFilteredArray(localArray);
    }

    const filterArray = (searchString, value) => {

        let searchLower = searchString === undefined ? undefined : searchString.toLowerCase();

        if (value.name.toLowerCase().includes(searchLower) || searchLower === undefined) {
            setIconAmount((oldCount) => oldCount + 1)
            return false;
        } else if (contains(value.alias, searchLower)) {
            setIconAmount((oldCount) => oldCount + 1)
            return false;
        } else if (value.hasOwnProperty('group') && value.group.toLowerCase().includes(searchLower)) {
            setIconAmount((oldCount) => oldCount + 1)
            return false;
        } else {
            return true;
        }
    }

    const setActiveItem = (item) => {
        setSvgImport('import { ' + item.name + ' } from "@digdir/ds-icons/svg/' + item.name + '.svg" ')
        setReactImport('import { ' + item.name + ' } from "@digdir/ds-icons"')
        setReactImport(`import { ${item.name} } from "@digdir/ds-icons"
<${item.name} color="blue" height="100px" width="100px"/>`)
        setShowModalClass('icon-modal--show')
        setActiveName(item.name);
        setActiveIcon(item.icon);
    }

    const contains = (arr = [], m) => arr.some((txt) => txt.includes(m));

    return (
        <div className="icons">
            <div className={'icon-modal ' + showModalClass}>
                <div className="icon-modal__bg" onClick={() => setShowModalClass('')}/>
                <div className="icon-modal__content">
                    <div className="icon-modal__header">
                        <h2 className="icon-modal__title">{activeName}</h2>
                        <div className="icon-modal__close" onClick={() => setShowModalClass('')}
                             dangerouslySetInnerHTML={{__html: iconList.x.icon}}/>
                    </div>
                    <div className="icon-modal__body">
                        <div className="icon-modal__left">
                            <div dangerouslySetInnerHTML={{__html: activeIcon}}/>
                        </div>
                        <div className="icon-modal__right">
                            <h3>React</h3>
                            <SyntaxHighlighter language="javascript" style={nightOwl}>
                                {reactImport}
                            </SyntaxHighlighter>
                            <h3>Svg</h3>
                            <SyntaxHighlighter language="javascript" style={nightOwl}>
                                {svgImport}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icons__search">
                <div dangerouslySetInnerHTML={{__html: iconList.search.icon}}/>
                <input
                    value={search}
                    onChange={e => init(e.target.value)}
                    type="text"
                    placeholder="Søk etter ikoner her..."
                    autoComplete="off"/>
            </div>

            <div className="icons__amount">viser <b>{iconAmount}</b> ikoner</div>
            <hr/>

            <div className="icons__items">
                {Object.entries(filteredArray).map((groupValue, groupIndex) => {
                    return (
                        <div key={groupIndex}>
                            {groupValue[1].length ? <h2>{groupValue[0]}</h2> : ''}
                            <div className="icons__row">
                                {
                                    Object.entries(groupValue[1]).map((value, index) => {
                                        return (
                                            <div key={index} className="icons__col">
                                                <button className="icons__item"
                                                        onClick={() => setActiveItem(value[1])}>
                                                    <div className="icons__icon">
                                                        <div dangerouslySetInnerHTML={{__html: value[1].icon}}/>
                                                    </div>
                                                    <div className="icons__name">{value[1].name}</div>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default IconsComponent