import block from '../assets/block.svg';
import { useGlobalContext } from '../context/GlobalStateContext';

const ListItem = (row, currentScreen) => {
 
    const { updateRow } = useGlobalContext();

    return (
        <div className="row border-bottom mx-0 pt-4 px-2 align-items-center justify-content-center media list-item">
            <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-12 mb-sm-4 mb-3 align-items-center  media d-flex">   
                <img className="me-sm-4 me-3 img-fluid rounded profile" width="90" src={row.imagePath} alt="DexignZone"/>
                <div className="media-body primary-data">
                    <span className="text-primary d-block">{row.cnic}</span>
                    <h3 className="fs-20 text-black font-w600 mb-1 name">{row.firstName} {row.lastName}</h3>
                </div>  
            </div>
            <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                <small className="mb-2 d-block">Email</small>
                <span className="text-black font-w600">{row.email}</span>
            </div>
            <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                <small className="mb-2 d-block">Phone</small>
                <span className="text-black font-w600">{row.mobileNo}</span>
            </div>
            <div className="col-xl-2 col-xxl-2 col-lg-3 col-sm-4 mb-sm-4 col-6 mb-3">
                <img className="block" src={block} alt="" onClick={() => {
                    if(row.isAvailable === 'online'){

                        if(window.confirm('Are you sure you want to block this user?')){
                            row.isAvailable = 'blocked';
                            updateRow(row, currentScreen);
                            alert('User blocked successfully');
                        } else {
                            alert('User not blocked');
                        }
                    } else if(row.isAvailable === 'blocked'){
                        console.log('aa');
                        if(window.confirm('Are you sure you want to unblock this user?')){
                            row.isAvailable = 'online';
                            updateRow(row, currentScreen);
                            alert('User unblocked successfully');
                        } else {
                            alert('User not unblocked');
                        }
                    }
                    
                }}/> 
            </div>
        </div>
    )
}

export default ListItem;