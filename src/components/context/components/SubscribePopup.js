import { Modal, Form, Input, Button } from 'antd';
import { useContext, useRef, useState } from 'react';

import ShopItemContext from '../ShopItemContext';

const SubscribePopup = function ({ isOpen, onClose }) {
  const [isFormValid, setFormValid] = useState(false);
  const {
    shopItem: { title, subscribed },
    onSubscribe,
  } = useContext(ShopItemContext);
  const emailInput = useRef();

  const [form] = Form.useForm();

  function checkIsFormValid(formFields) {
    const isFormValid = formFields.every(
      (formField) => !formField.errors?.length
    );
    setFormValid(isFormValid);
  }

  return (
    <Modal
      centered
      title="Subscribe"
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          disabled={!isFormValid}
          onClick={() => onSubscribe(emailInput.current.input.value)}
        >
          OK
        </Button>,
      ]}
    >
      {subscribed ? (
        `You have been successfully subscribed for "${title}" availability updates`
      ) : (
        <>
          <p>
            Sorry, but "{title}" is not available for now. Leave your e-mail –
            and we'll notify you about all the updates
          </p>
          <Form form={form} onFieldsChange={checkIsFormValid}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input autoComplete="off" ref={emailInput} />
            </Form.Item>
          </Form>
        </>
      )}
    </Modal>
  );
};

export default SubscribePopup;
