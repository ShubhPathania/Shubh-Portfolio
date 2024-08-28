import React from 'react';
import styles from './ProjectsStyles.module.css';
import playstore from '../../assets/playstore.png';
import netflix from '../../assets/netflix.png';
import customer from '../../assets/customer.png';
import sales from '../../assets/sales.png';
import zomato from '../../assets/zomato.png';
import bike from '../../assets/bike.png';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={playstore}
          link="https://github.com/ShubhPathania/Play-Store-App-Review-Analysis"
          h3="Play Store App Review Analysis"
          p="EDA Project"
        />
        <ProjectCard
          src={netflix}
          link="https://github.com/ShubhPathania/Product-Dissection-for-Netflix"
          h3="Product Dissection for Netflix"
          p="Case Study"
        />
        <ProjectCard
          src={customer}
          link="https://github.com/ShubhPathania/Customer-Purchase-Behavior-Analysis"
          h3="Customer Purchase Behavior Analysis"
          p="Statistics Project"
        />
        <ProjectCard
          src={sales}
          link="https://github.com/ShubhPathania/AdventureWorks-Sales-Analysis-Excel"
          h3="Adventure Works Sales Analysis"
          p="Excel Project"
        />
        <ProjectCard
          src={zomato}
          link="https://github.com/ShubhPathania/Zomato-Restaurant-Clustering-and-Sentiment-Analysis"
          h3="Zomato Restaurant Clustering and Sentiment Analysis"
          p="Unsupervised Learning Project"
        />
        <ProjectCard
          src={bike}
          link="https://github.com/ShubhPathania/Bike-Sharing-Demand-Prediction"
          h3="Bike Sharing Demand Prediction"
          p="Supervised Learning Project"
        />
      </div>
    </section>
  );
}

export default Projects;
