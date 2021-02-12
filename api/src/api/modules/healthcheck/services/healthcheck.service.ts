interface IHealthcheckStatus {
  health: string;
}

class HealthcheckService {
  public exec(): IHealthcheckStatus {
    const health: IHealthcheckStatus = {
      health: 'green',
    };
    return health;
  }
}

export default new HealthcheckService();
