import React, {useState} from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import SelectOptionField from '../components/SelectOptionField';
import SelectField from '../components/SelectField';
import {API, LeagueTypes} from '../API';

export const Leagueform: React.FC = () => {
  const [name, setName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState(LeagueTypes.PRIVATE);

  const createLeague = async () => {
    try {
      const result = await API.createLeague({
        name,
        discipline,
        description,
        type
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectChange = (value: string) => {
    if (value === 'Private') {
      setType(LeagueTypes.PRIVATE);
    } else {
      setType(LeagueTypes.PUBLIC);
    }
  };

  return (
    <>
      <form>
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
          <SelectOptionField value={LeagueTypes.PUBLIC}>
            Public
          </SelectOptionField>
        </SelectField>
        <Button fullWidth onClick={createLeague} secondary>
          create New League
        </Button>
      </form>
    </>
  );
};
