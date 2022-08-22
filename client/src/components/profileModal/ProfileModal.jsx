import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.css"

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened = {modalOpened}
      onClose={()=>setModalOpened(false)}
    >
     <form className="infoForm">
      <h3>Your Info</h3>
      <div>
        <input type="text" className="infoInput" name="FirstName" placeholder="First Name" />
        <input type="text" className="infoInput" name="LastName" placeholder="Last Name" />

      </div>

      <div>
        <input type="text" className="infoInput" name="WorkAt" placeholder="Work At" />

      </div>
      <div>
        <input type="text" className="infoInput" name="LivesIn" placeholder="Lives In" />
        <input type="text" className="infoInput" name="Country" placeholder="Country" />

      </div>
      <div>

        <input type="text" className="infoInput" name="Country" placeholder="Relationship Status" />
      </div>
      <div>
        Profile Image
        <input type="file" className="infoFile" name="ProfileImg"/>
        Cover Image
        <input type="file" className="infoFile" name="CoverImg"/>
      </div>
      <button className="btn infoBtn">Update Info</button>
     </form>
    </Modal>
  );
}
export default ProfileModal; 