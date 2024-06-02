import React from 'react';
import renderer from 'react-test-renderer';
import { CurrentWeather } from '../CurrentWeather';

describe('CurrentWeather', () => {
    it('renders default correctly', () => {
        const tree = renderer
            .create(<CurrentWeather
                city="London"
                country="UK"
                temperature="20"
                condition="Sunny"
                iconUrl="https://example.com/icon.png"
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders future weather prop', () => {
        const tree = renderer
            .create(<CurrentWeather
                city="London"
                time="12:00"
                country="UK"
                temperature="20"
                condition="Sunny"
                iconUrl="https://example.com/icon.png"
                future
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
