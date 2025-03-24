import { useState, useCallback } from 'react';
import { OnboardingState, OnboardingStep, CompanyProfile } from '@/types/onboarding';

const INITIAL_STATE: OnboardingState = {
  step: 'company_type',
  profile: {},
};

export function useOnboarding(ceoName: string) {
  const [state, setState] = useState<OnboardingState>(INITIAL_STATE);

  const getNextQuestion = useCallback((step: OnboardingStep, profile: Partial<CompanyProfile>) => {
    switch (step) {
      case 'company_type':
        return `Will I be the CEO of your real company, or are you making one up to check out how this works?`;
      case 'name':
        const isReal = profile.companyType === 'real';
        return isReal 
          ? `Excellent! I'm excited to help with your actual business. First things first - what's your name?`
          : `Perfect! I love a good test drive. Let's have some fun with this - what's your name?`;
      case 'company_name':
        return `Nice to meet you, ${profile.name || ''}! What's the name of your company?`;
      case 'company_description':
        return `${profile.companyName || ''} - I like it! Tell me in a sentence or two, what does the company do?`;
      case 'company_size':
        return `That's fascinating! How many employees do you currently have?`;
      case 'funding_stage':
        return `Thanks! And what's your current funding stage? (e.g., Pre-seed, Seed, Series A, etc.)`;
      case 'product_state':
        return `Got it! Last question: what's the current state of your product? (e.g., Idea, MVP, Beta, Live)`;
      case 'complete':
        const companyRef = profile.companyType === 'real' ? 'your company' : 'this venture';
        return `Perfect! I now have a good understanding of ${companyRef}. Let's get started with your business strategy. What would you like to focus on first?`;
      default:
        return null;
    }
  }, []);

  const handleUserResponse = useCallback((response: string) => {
    setState(prev => {
      const newProfile = { ...prev.profile };
      
      switch (prev.step) {
        case 'company_type':
          newProfile.companyType = response.toLowerCase().includes('real') ? 'real' : 'test';
          break;
        case 'name':
          newProfile.name = response;
          break;
        case 'company_name':
          newProfile.companyName = response;
          break;
        case 'company_description':
          newProfile.companyDescription = response;
          break;
        case 'company_size':
          newProfile.companySize = response;
          break;
        case 'funding_stage':
          newProfile.fundingStage = response;
          break;
        case 'product_state':
          newProfile.productState = response;
          break;
      }

      const steps: OnboardingStep[] = [
        'company_type',
        'name',
        'company_name',
        'company_description',
        'company_size',
        'funding_stage',
        'product_state',
        'complete'
      ];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1] || 'complete';

      return {
        step: nextStep,
        profile: newProfile,
      };
    });
  }, []);

  const getCurrentQuestion = useCallback(() => {
    return getNextQuestion(state.step, state.profile);
  }, [state.step, state.profile, getNextQuestion]);

  return {
    state,
    handleUserResponse,
    getCurrentQuestion,
    isComplete: state.step === 'complete',
  };
} 