import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const SimpleTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
        <Tab eventKey='home' title='Home'>
          <p>
            Those parts of thee that the world's eye doth view Want nothing that
            the thought of hearts can mend; All tongues--the voice of
            souls--give thee that due, Uttering bare truth, even so as foes
            commend. Thy outward thus with outward praise is crown'd; But those
            same tongues, that give thee so thine own, In other accents do this
            praise confound By seeing farther than the eye hath shown. They look
            into the beauty of thy mind, And that in guess they measure by thy
            deeds;
          </p>
        </Tab>
        <Tab eventKey='profile' title='Profile'>
          <p>
            Those parts of thee that the world's eye doth view Want nothing that
            the thought of hearts can mend; All tongues--the voice of
            souls--give thee that due, Uttering bare truth, even so as foes
            commend. Thy outward thus with outward praise is crown'd; But those
            same tongues, that give thee so thine own, In other accents do this
            praise confound By seeing farther than the eye hath shown. They look
            into the beauty of thy mind, And that in guess they measure by thy
            deeds;
          </p>
        </Tab>
        <Tab eventKey='contact' title='Contact' disabled>
          <p>
            Those parts of thee that the world's eye doth view Want nothing that
            the thought of hearts can mend; All tongues--the voice of
            souls--give thee that due, Uttering bare truth, even so as foes
            commend. Thy outward thus with outward praise is crown'd; But those
            same tongues, that give thee so thine own, In other accents do this
            praise confound By seeing farther than the eye hath shown. They look
            into the beauty of thy mind, And that in guess they measure by thy
            deeds;
          </p>
        </Tab>
      </Tabs>
    </>
  );
};
export default SimpleTabs;
