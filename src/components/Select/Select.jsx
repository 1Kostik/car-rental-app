import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        height: '48px',
        padding: '0',
        paddingLeft: '14px',
        backgroundColor: '#F7F7FB;',
        borderRadius: '14px',
        borderColor: state.isSelected ? 'transparent' : 'transparent',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.1',
        '&:hover': {
            borderColor: '#2684ff',
        },
        "@media screen and (min-width: 768px)": {
        fontSize: '18px',
    }
    }),
    option: (provided, state) => ({
        ...provided,
        borderRadius: '14px',
        paddingBottom: '8px',
        backgroundColor: state.isSelected ? '#3470ff' : 'white',
        color: state.isSelected ? 'white' : 'rgba(18, 20, 23, 0.2)',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.25',
        cursor: 'pointer',
        "@media screen and (min-width: 768px)": {
            fontSize: '16px',
        }
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#121417',
        cursor: 'pointer',
        transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
    indicatorSeparator: provided => ({
        ...provided,
        backgroundColor:'rgba(247, 247, 251, 1)', 
    }),
    placeholder: provided => ({
        ...provided,
        backgroundColor: 'rgba(247, 247, 251, 1)',
        color: '#121417',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.11',
        "@media screen and (min-width: 768px)": {
            fontSize: '18px',
        }
    }),
    menu: provided => ({
        ...provided,
        borderRadius: '14px',
        padding: '14px 8px 14px 18px',
    }),
    menuList: provided => ({
        ...provided,
        '::-webkit-scrollbar': {
            width: '8px',
            height: '130px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#f7f7fb',
            borderRadius: '10px',
        },
    })
};

export const SelectInput = ({ name, options, placeholder, refProp} ) => {

    return (
        <Select
            required
            name={name}
            options={options}
            styles={customStyles}
            placeholder={placeholder}
            ref={refProp}/>
    )
};