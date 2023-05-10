/*Текст-заглушка при отсутствии точек маршрута*/

import AbstractView from '../framework/view/abstract-view.js';

function createNoWaypointTemplate() {
  return (
    `<p class="trip-events__msg">
       Click New Event to create your first point
     </p>`
  );
}

export default class NoWaypointView extends AbstractView {
  get template() {
    return createNoWaypointTemplate();
  }
}
