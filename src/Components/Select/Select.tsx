import React, {useEffect} from 'react'
import styles from './Select.module.css'
import {KeyboardEvent} from "react"

type ItemSelectType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemSelectType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = React.useState(false)
    const [hoveredElementValue, setHoveredElementValue] = React.useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);
    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendElement) {
                        props.onChange(pretendElement.value)
                        return
                    }
                }
            }
            if  (!selectedItem) {
                props.onChange(props.items[0].value)
                return
            }
        }

        if (e.code === 'Enter' || e.code === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div
                className={`${styles.select}}`}
                onKeyUp={onKeyUp}
                tabIndex={0}

            >
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => {
                            return (
                                <div
                                    onMouseEnter={() => {
                                        setHoveredElementValue(i.value)
                                    }}
                                    className={styles.item + ' ' + (hoveredItem === i
                                        ? styles.selected
                                        : '')}
                                    key={i.value}
                                    onClick={() => onItemClick(i.value)}
                                >
                                    {i.title}
                                </div>)
                        })}
                    </div>
                }
            </div>
        </>
    )
}