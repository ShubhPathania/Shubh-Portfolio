import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../Common/SkillList';
import { useTheme } from '../../Common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Tableau" />
        <SkillList src={checkMarkIcon} skill="Power BI" />
        <SkillList src={checkMarkIcon} skill="Excel" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Statistics" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="NLP" />
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Numpy" />
        <SkillList src={checkMarkIcon} skill="Pandas," />
        <SkillList src={checkMarkIcon} skill="Matplotlib," />
        <SkillList src={checkMarkIcon} skill="Seaborn," />
        <SkillList src={checkMarkIcon} skill="Plotly," />
      </div>

    </section>
  );
}

export default Skills;
