# MINDBench Draft

Dashboard that allow users to view and compare current LLM models perform in mental health assistance.

## Installation

To start the program run the following command from the client folder (currently using mock data)
```bash
cd client
npm run dev
```

## Draft data models
Models
Name                   | Description | Version | Android | IOS | Web | Free | Monthly | Annual
VarChar (primary key)  | VarChar     | VarChar | Int     | Int | Int | Int  | Int     | Int

Hexaco_test
Name                   |
VarChar (primary key)  |

Bigfive_test

MBTI_test

Enneagram_test
## TODO
- Added styling
- Models detail page
- Nav bar
- Vertical filter on the left
- Admin login/logout
- Admin features: edit, add, remove data

## Project Structure
```bash
|-- main
|   |-- server              # backend
|       |-- data            # mock data
|       |-- styles          # css styling
|       |-- App.jsx         # main page
|   |-- client              # frontend (soon)
|   |-- README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MindLamp](https://www.digitalpsych.org/mindlamp.html)