import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";


export default function TermsModal({isOpen, closeModal}) {
  return (
    <Modal isOpen={isOpen} toggle={closeModal}>
      <ModalHeader style={{textAlign: "center"}}>
        Terms of service.
      </ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ligula in efficitur sollicitudin. Sed nec tellus lacus. Nam dapibus at massa et hendrerit. Ut viverra imperdiet quam, ac iaculis odio. Sed tempus aliquam tincidunt. Etiam fermentum, nulla maximus dignissim scelerisque, elit nunc vestibulum leo, sodales dictum nibh metus non magna. Suspendisse elementum massa id posuere scelerisque. Nulla facilisi. Morbi vitae lacinia mauris, nec ullamcorper neque. Nulla sed urna rutrum, sodales neque ac, efficitur elit. Donec nibh nisi, imperdiet sollicitudin convallis nec, tempor a augue.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={closeModal}>Back</Button>
      </ModalFooter>
    </Modal>
  )
}