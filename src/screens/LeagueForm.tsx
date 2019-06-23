import React, {useState} from 'react';
import TextField from '../components/TextField';
import {connect} from 'react-redux';
import Button from '../components/Button';
import SelectOptionField from '../components/SelectOptionField';
import SelectField from '../components/SelectField';
import {LeagueTypes, LeagueData} from '../API';
import {createLeague} from '../redux/league/actions';

type Props = {
  onCreate: (league: LeagueData) => void;
};

export const LeagueForm: React.FC<Props> = ({onCreate}) => {
  const [name, setName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(LeagueTypes.PRIVATE);

  const handleSelectChange = (value: string) => {
    if (value === 'Private') {
      setType(LeagueTypes.PRIVATE);
    } else {
      setType(LeagueTypes.PUBLIC);
    }
  };

  return (
    <>
      <TextField
        placeholder="Name"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <TextField
        placeholder="Discipline"
        value={discipline}
        onChange={e => setDiscipline(e.currentTarget.value)}
      />
      <TextField
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.currentTarget.value)}
      />
      <SelectField
        value={type}
        onChange={e => handleSelectChange(e.currentTarget.value)}
      >
        <SelectOptionField value={LeagueTypes.PRIVATE}>
          Private
        </SelectOptionField>
        <SelectOptionField value={LeagueTypes.PUBLIC}>Public</SelectOptionField>
      </SelectField>
      <Button
        fullWidth
        onClick={() => {
          onCreate({name, discipline, description, type});
        }}
        secondary
      >
        Create New League
      </Button>
    </>
  );
};

const dispatchProps = {
  onCreate: createLeague
};

export default connect(
  null,
  dispatchProps
)(LeagueForm);
