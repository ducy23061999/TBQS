import React, {useState, useCallback} from 'react'
import styles from './styles'
import { View } from 'react-native'
import {
    Text,
    Button
} from 'native-base'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Header from './Header';
import ModalLayout from './ModalLayout';
import WrapOptionPicker from '../WrapOptionPicker';
import WrapTextInput from '../WrapTextInput';
import {Const} from '../../comon/Constants'
import {connect} from 'react-redux';
import {addUserFavorite, addExisFavorite} from '../../store/actions';
import WrapAutoCompleleInput from '../WrapAutoCompleteInput';
import Services from '../../services'

const FavorPopular = [
    {
        label: 'Hiếm có khó tìm',
        value: Const.FavorPopular.SO_RARE
    },
    {
        label: 'Hiếm',
        value: Const.FavorPopular.RARE
    },
    {
        label: 'Dị',
        value: Const.FavorPopular.WEIRD
    },
    {
        label: 'Bình thường',
        value: Const.FavorPopular.NORMAL
    },
    {
        label: 'Phổ biến',
        value: Const.FavorPopular.POPULAR
    },
    {
        label: 'Cực kì phổ biến',
        value: Const.FavorPopular.COMMON
    },
]

export const FavoriteModal = function({isVisible, onClose, addUserFavorite, addExisFavorite}) {
    const [favor, setFavor] = useState('');
    const [commonFavoPicker, setCommonFavor] = useState(Const.FavorPopular.RARE);
    const [favoText, setText] = useState('');

    const searchData = (value) => {
       if (value.length > 2) {
        Services.searchFavorite(value)
        .then(data => {
            setFavor(data.data)
        })
        .catch(error => setFavor([]))
       }
    }

    const addExisTag = (tag) => {
        addExisFavorite(tag);
        onClose()
    }

    const wrapOnAdd = () => {

        addUserFavorite({
            name: favoText,
            match_point: commonFavoPicker
        })
        onClose()
    }
    return (
       <ModalLayout isVisible = {isVisible}
        onAdd = {wrapOnAdd}
        onClose = {onClose}
       >
           <WrapAutoCompleleInput 
                field = 'Nhập sở thích'
                placeholder = 'Sở thích'
                data = {favor}
                onValueChange = {value => {
                    setText(value)
                    searchData(value)
                }}
                onSelectedItem = {(tag) => addExisTag(tag)}
           />

           <WrapOptionPicker 
                field = 'Chọn mức độ phổ biến'
                placeholder = 'Mức độ'
                data = {FavorPopular}
                require
                callBackValueChange = {(value) => setCommonFavor(value)}
           />

       </ModalLayout>
    )
}

const mapDispathToProps = (dispatch) => ({
    addUserFavorite: (favorite) => dispatch(addUserFavorite(favorite)),
    addExisFavorite: (favorite) => dispatch(addExisFavorite(favorite))
})

export default connect(null, mapDispathToProps)(FavoriteModal)


