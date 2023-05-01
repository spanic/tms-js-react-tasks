import { Button, Modal, Result, Steps } from 'antd';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { store } from '../../../../store';
import { fetchOffers, fetchRestaurants } from '../../orders.service';
import {
  saveOffers,
  saveRestaurants,
  setChosenOffers,
  setChosenRestaurant,
  setCurrentStep,
  updateStep,
} from '../../orders.state';
import ChooseOffers from '../choose-offers-step/ChooseOffers';
import ChooseRestaurant from '../choose-restaurant-step/ChooseRestaurant';

export default function NewOrderModal({ isOpen, close, createNewOrder }) {
  const dispatch = useDispatch();

  const [currentStepIdx, currentStepState] = useSelector((state) => {
    const steps = state.orders.steps;
    const { currentStep } = steps;
    return [currentStep, steps[currentStep]];
  });

  const openNextStep = function () {
    dispatch(setCurrentStep(currentStepIdx + 1));
  };

  const openPreviousStep = function () {
    dispatch(setCurrentStep(currentStepIdx - 1));
  };

  // #### Restaurants #####

  const restaurants = useSelector((state) => state.orders.restaurants);

  const storeRestaurants = async () => {
    const restaurants = await fetchRestaurants();
    dispatch(saveRestaurants(restaurants));

    const currentStepConfig = store.getState().orders.steps[currentStepIdx];
    if (!currentStepConfig) {
      dispatch(
        updateStep({
          stepId: currentStepIdx,
          isValid: false,
        })
      );
    }
  };

  const selectRestaurant = (restaurantId) => {
    dispatch(setChosenRestaurant(restaurantId));
    dispatch(
      updateStep({
        stepId: currentStepIdx,
        value: restaurantId,
        isValid: true,
      })
    );
  };

  // #### Offers ####

  const offers = useSelector((state) => state.orders.offers);

  const storeOffers = async () => {
    const { chosenRestaurant, chosenOffers } = store.getState().orders;

    const offers = await fetchOffers(chosenRestaurant);
    dispatch(saveOffers(offers));

    const offersIds = offers.map((offer) => offer._id);
    const areOffersSame = chosenOffers?.every((chosenOffer) =>
      offersIds.includes(chosenOffer)
    );
    dispatch(
      updateStep({
        stepId: currentStepIdx,
        value: areOffersSame ? chosenOffers : undefined,
        isValid: areOffersSame,
      })
    );
  };

  const selectOffers = (chosenOffersIds) => {
    dispatch(setChosenOffers(chosenOffersIds));
    dispatch(
      updateStep({
        stepId: currentStepIdx,
        value: chosenOffersIds,
        isValid: Array.isArray(chosenOffersIds) && chosenOffersIds.length > 0,
      })
    );
  };

  const onSubmitOrder = () => {
    const { chosenRestaurant, chosenOffers } = store.getState().orders;
    createNewOrder(chosenRestaurant, chosenOffers);
  };

  const stepsConfig = useMemo(() => {
    return [
      {
        title: 'Choose the restaurant',
        content: (
          <ChooseRestaurant
            restaurants={restaurants}
            value={currentStepState?.value}
            onLoad={storeRestaurants}
            onChoose={selectRestaurant}
          />
        ),
        controls: [
          <Button
            key="next"
            type="primary"
            onClick={openNextStep}
            disabled={!currentStepState?.isValid}
            data-cy="restaurants-next-step-btn"
          >
            Next step
          </Button>,
        ],
      },
      {
        title: 'Choose offers',
        content: (
          <ChooseOffers
            offers={offers}
            value={currentStepState?.value}
            onLoad={storeOffers}
            onChoose={selectOffers}
          />
        ),
        controls: [
          <Button key="back" onClick={openPreviousStep}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={!currentStepState?.isValid}
            onClick={onSubmitOrder}
            data-cy="offers-submit-order-btn"
          >
            Submit order
          </Button>,
        ],
      },
    ];
  }, [currentStepState, restaurants, offers]);

  return (
    <Modal
      title={<h2>New order</h2>}
      centered
      open={isOpen}
      onCancel={close}
      footer={stepsConfig[currentStepIdx].controls}
      destroyOnClose
      width="700px"
      data-cy="new-order-modal"
    >
      <Steps current={currentStepIdx} items={stepsConfig} />
      <StepContentWrapper>
        {stepsConfig[currentStepIdx].content}
      </StepContentWrapper>
    </Modal>
  );
}

const StepContentWrapper = styled.div`
  margin-top: 24px;
`;
